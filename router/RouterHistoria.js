const express = require('express');
const router = express.Router();
const RouterHistoria = require('../models/HistorialClinico');

router.post("/", (req, res) => {
    const historia = new HistorialClinico({
        Paciente: {
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            tipoDocumento: req.body.tipoDocumento,
            numeroDocumento: req.body.numeroDocumento,
            fechaNacimiento: req.body.fechaNacimiento,
            tipoUsuario: req.body.tipoUsuario,
            grupoSanguineo: req.body.grupoSanguineo
        },
        Medico: {
                    
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            tipoDocumento: req.body.tipoDocumento,
            numeroDocumento: req.body.numeroDocumento,
            Especialidades: {
                nombre: req.body.nombre,
                codigo: req.body.codigo
            }
        },
        Citas: {
            codigoCitas: req.body.codigoCitas,
            Agendas: {
                estado: req.body.estado,
            }
        },
        codigo: req.body.codigo,
        edad: req.body.edad,
        peso: req.body.peso,
        altura: req.body.altura,
        alergias: req.body.alergias,
        sintomas: req.body.sintomas,
        antecedentes: req.body.antecedentes,
        presionArterial: req.body.presionArterial,
        temperatura: req.body.temperatura,
        saturacionOxigeno: req.body.saturacionOxigeno,
        descripcion: req.body.descripcion,
        diagnostico: req.body.diagnostico,
        OrdenesEspecialistas: {
            descripcion: req.body.descripcion,
            Especialidades: {
                nombre: req.body.nombre,
                codigo: req.body.codigo
            }
        },
        OrdenIncapacidades: {
            fechaInicio: req.body.fechaInicio,
            fechaFin: req.body.fechaFin
        },
        OrdenExamenes: {
            Examenes: {
                nombre: req.body.nombre,
                codigo: req.body.codigo,
                tipoExamen: req.body.tipoExamen,
                descripcion: req.body.descripcion
            },
            vigengia: req.body.vigencia,
            resultados: req.body.resultados,
            descripcion: req.body.descripcion,
        },
        OrdenMedicamentos: {
            Medicamentos: {
                nombre: req.body.nombre,
                componenteActivo: req.body.componenteActivo,
                presentacion: req.body.presentacion,
                descripcion: req.body.descripcion,
                codigo: req.body.codigo
            },
            dosis: req.body.dosis,
            cantidad: req.body.cantidad,
            vigengia: req.body.vigencia,
            estado: req.body.vigencia
        }
    });

    historia 
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err});
        });

});



module.exports = RouterHistoria;
