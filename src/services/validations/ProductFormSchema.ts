import { z } from "zod";

export const productFormSchema = z.object({
    name: z.string({ required_error: "Nome é obrigatório" })
        .min(5, { message: "O nome deve ter pelo menos 5 caracteres." })
        .max(50, { message: "O nome não pode ter mais de 50 caracteres." }),
    description: z.string({ required_error: "Descrição é obrigatório" })
        .min(10, { message: "A descrição deve ter pelo menos 10 caracteres." })
        .max(200, { message: "A descrição não pode ter mais de 200 caracteres." }),
    price: z.coerce.number({ invalid_type_error: "O preço não pode ser menor que R$1.", required_error: "Preço é obrigatório" })
        .positive({ message: "O preço precisa ser maior que 0." })
        .min(1, { message: "O preço não pode ser menor que R$1." })
        .max(10000, { message: "O preço não pode ser maior que R$10000." }),
    quantity: z.coerce.number({ invalid_type_error: "A quantidade não pode ser menor que 1.", required_error: "Quantidade é obrigatório" })
        .int({ message: "A quantidade precisa ser um número inteiro." })
        .positive({ message: "A quantidade precisa ser maior que 0." })
        .max(1000, { message: "A quantidade não pode ser maior que 1000." }),
    categoryId: z.coerce.number({ invalid_type_error: "Selecione uma categoria.", required_error: "Selecione uma categoria." }),
    departmentId: z.coerce.number({ invalid_type_error: "Selecione uma categoria.", required_error: "Selecione um departamento" }),
    createdAt: z.string().optional()
    //     tags: z.string(),
})//.refine(data => data.price > 0 && data.quantity > 0, {
//     message: "O preço e a quantidade precisam ser maiores que 0.",
//     path: ["price", "quantity"],
// });

export type ProductFormSchema = z.infer<typeof productFormSchema>;