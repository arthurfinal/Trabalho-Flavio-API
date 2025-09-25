import { Request, Response } from 'express';
import * as userBusiness from '../business/userBusiness';

//Atividade 1
export const getUserByIdController = (req: Request, res: Response) => {
  const userId = parseInt(req.params.id as string);
  if (isNaN(userId)) {
    return res.status(400).json({ success: false, message: 'ID do usuário inválido. Por favor, forneça um número.' });
  }
  const user = userBusiness.getUserById(userId);
  if (!user) {
    return res.status(404).json({ success: false, message: 'Usuário não encontrado.' });
  }
  res.json({ success: true, data: user });
};

//Atividade 2
export const getUsersByAgeRangeController = (req: Request, res: Response) => {
  const minAge = parseInt(req.query.min as string);
  const maxAge = parseInt(req.query.max as string);
  if (isNaN(minAge) || isNaN(maxAge)) {
    return res.status(400).json({ success: false, message: 'Parâmetros de idade (min e max) inválidos. Por favor, forneça números.' });
  }
  const usersByAgeRange = userBusiness.getUsersInAgeRange(minAge, maxAge);
  if (usersByAgeRange.length === 0) {
    return res.status(404).json({ success: false, message: 'Nenhum usuário encontrado na faixa etária informada.' });
  }
  res.json({ success: true, data: usersByAgeRange });
};