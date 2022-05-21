import {getConnection} from '../db/connection';

export const getNotas=async(req,res)=>{
    const pool=await getConnection();
    const result=await pool.request().query(`SELECT * FROM ESTUDIANTES`);
    res.send(result.recordset);
}

export const createNota=async(req,res)=>{
    const {nombre, parcial1, parcial2, parcial3 } =req.body;
    if (nombre&&parcial1&&parcial2&&parcial3) {
        const pool=await getConnection();
        pool.request().query(`INSERT INTO ESTUDIANTES(nombre, parcial1, parcial2, parcial3) VALUES ( '${String(nombre).toUpperCase()}', ${parcial1},${parcial2}, ${parcial3})`)
        .then(result=>{res.json({})})
        .catch(err=>res.status(400).send('No se ha podido registrar la nota'));
    }else{
        res.status(400).send('Los campos están incompletos')
    }
}

export const deleteNota=async(req,res)=>{
    const {id} =req.params;
    if (id) {
        const pool=await getConnection();
        pool.request().query(`DELETE FROM ESTUDIANTES WHERE id=${id}`)
        .then(result=>{res.json({})})
        .catch(err=>res.status(400).send('No se ha eliminar la nota'));
    }else{
        res.status(400).send('Ha ocurriod un error al Eliminar')
    }
}

export const editNota=async(req,res)=>{
    const {id,nombre, parcial1, parcial2, parcial3 } =req.body;
    if (id&&nombre&&parcial1&&parcial2&&parcial3) {
        const pool=await getConnection();
        pool.request().query(`UPDATE ESTUDIANTES SET nombre='${String(nombre).toUpperCase()}', parcial1=${parcial1}, parcial2=${parcial2}, parcial3 =${parcial3} WHERE id=${id}`)
        .then(result=>{res.json({})})
        .catch(err=>res.status(400).send('No se ha podido editar la nota'));
    }else{
        res.status(400).send('Los campos están incompletos')
    }
}
