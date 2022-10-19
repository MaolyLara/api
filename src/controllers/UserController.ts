import { Request, Response } from "express";
import User from "../database/Model/UserModel";



const UserController = {

    async index(req: Request, res: Response): Promise<Response> {

        let users = await User.find()


        return res.json(users)
    },


    async findById(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        let user = await User.findById(id)


        return res.json(user)
    },

    async create(req: Request, res: Response): Promise<Response> {

        await User.create(req.body)
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })

        return res.status(500)
    },

    async update(req: Request, res: Response): Promise<Response> {


        const { id } = req.params;
        const { nome, email, senha,dataNacimento, endereco } = req.body

        await User.findByIdAndUpdate(id, {
            nome: nome,
            email: email,
            senha: senha,
            dataNacimento: dataNacimento,
            endereco: endereco
        })
            .then(data => {
                return res.json(data)
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })

        return res.status(500)

    },

    async delete(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        await User.findByIdAndDelete(id)

            .then(data => {
                return res.json({ message: `${id} exluido com sucesso!` })
            })
            .catch(error => {
                return res.status(400).json(error.original)
            })
        return res.status(500)

    }
}

export default UserController