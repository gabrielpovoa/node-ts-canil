import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.send('home controller is working')
    // res.render('pages/page')
}

export const dogs = (req: Request, res: Response) => {
    // res.render('pages/page')
}

export const cats = (req: Request, res: Response) => {
    // res.render('pages/page')
}

export const fish = (req: Request, res: Response) => {
     // res.render('pages/page')
}
