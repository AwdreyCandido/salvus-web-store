const nameRequiredError = "Nome é obrigatório";
const nameMinMessage = "O nome deve ter pelo menos 5 caracteres.";
const nameMaxMessage = "O nome não pode ter mais de 50 caracteres.";

const descriptionRequiredError = "Descrição é obrigatório";
const descriptionMinMessage = "A descrição deve ter pelo menos 10 caracteres.";
const descriptionMaxMessage = "A descrição não pode ter mais de 1000 caracteres.";

const priceInvalidTypeError = "O preço não pode ser menor que R$1.";
const priceRequiredError = "Preço é obrigatório";
const pricePositiveMessage = "O preço precisa ser maior que 0.";
const priceMinMessage = "O preço não pode ser menor que R$1.";
const priceMaxMessage = "O preço não pode ser maior que R$10000.";

const quantityInvalidTypeError = "A quantidade não pode ser menor que 1.";
const quantityRequiredError = "Quantidade é obrigatório";
const quantityIntMessage = "A quantidade precisa ser um número inteiro.";
const quantityPositiveMessage = "A quantidade precisa ser maior que 0.";
const quantityMaxMessage = "A quantidade não pode ser maior que 1000.";

const categoryIdInvalidTypeError = "Selecione uma categoria.";
const categoryIdRequiredError = "Selecione uma categoria.";

const departmentIdInvalidTypeError = "Selecione uma categoria.";
const departmentIdRequiredError = "Selecione um departamento";

import { z } from "zod";

export const productFormSchema = z.object({
    name: z.string({ required_error: nameRequiredError })
        .min(5, { message: nameMinMessage })
        .max(50, { message: nameMaxMessage }),
    description: z.string({ required_error: descriptionRequiredError })
        .min(10, { message: descriptionMinMessage })
        .max(1000, { message: descriptionMaxMessage }),
    price: z.coerce.number({ invalid_type_error: priceInvalidTypeError, required_error: priceRequiredError })
        .positive({ message: pricePositiveMessage })
        .min(1, { message: priceMinMessage })
        .max(10000, { message: priceMaxMessage }),
    quantity: z.coerce.number({ invalid_type_error: quantityInvalidTypeError, required_error: quantityRequiredError })
        .int({ message: quantityIntMessage })
        .positive({ message: quantityPositiveMessage })
        .max(1000, { message: quantityMaxMessage }),
    categoryId: z.coerce.number({ invalid_type_error: categoryIdInvalidTypeError, required_error: categoryIdRequiredError }),
    departmentId: z.coerce.number({ invalid_type_error: departmentIdInvalidTypeError, required_error: departmentIdRequiredError }),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    tags: z.string().optional(),
});

export type ProductFormSchema = z.infer<typeof productFormSchema>;