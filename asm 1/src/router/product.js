import express from "express"
import { creat, get, getAll, remove, update } from "../conprorent/project"
const router = express.Router()
router.post( "/product", creat )
router.put( "/product/:id", update )
router.get( "/product", getAll )
router.get( "/product/:id", get )
router.delete( "/product/:id", remove )


export default router