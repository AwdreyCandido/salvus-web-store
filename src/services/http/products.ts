import { AxiosError, AxiosInstance } from "axios"
import { getApiClient } from "../axios"
import { IProduct } from "../../models/IProduct"
import axios from "axios"

const EXPRESS_API: AxiosInstance = getApiClient()

export const getAllProductsRequest = async () => {
    try {
        const res = await EXPRESS_API.get("/products")
        return {
            status: res.status,
            statusText: res.statusText,
            data: res.data.data
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            handleAxiosError(error)
        }
    }
}

export const getProductRequest = async (id: number) => {
    try {
        const res = await EXPRESS_API.get(`/products/${id}`)
        return {
            status: res.status,
            statusText: res.statusText,
            data: res.data.data
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            handleAxiosError(error)
        }
    }
}

export const createProductRequest = async (product: IProduct) => {
    try {
        const res = await EXPRESS_API.post("/products", product)
        return {
            status: res.status,
            statusText: res.statusText,
            data: res.data.data
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            handleAxiosError(error)
        }
    }
}
export const updateProductRequest = async (id: number, product: IProduct) => {
    try {
        const res = await EXPRESS_API.patch(`/products/${id}`, product)
        return {
            status: res.status,
            statusText: res.statusText,
            data: res.data.data
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            handleAxiosError(error)
        }
    }
}

export const deleteProductRequest = async (id: number) => {
    try {
        const res = await EXPRESS_API.delete(`/products/${id}`)
        return {
            status: res.status,
            statusText: res.statusText,
            data: res.data.data
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            handleAxiosError(error)
        }
    }
}

const handleAxiosError = (error: AxiosError<any, any>) => {
    if (error.response) {
        return {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data
        };
    } else if (error.request) {
        return {
            status: 500,
            statusText: "No Response",
            data: null
        };
    }
}