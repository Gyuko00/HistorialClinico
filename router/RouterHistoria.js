const { request } = require('express');
const express = require('express');
const router = express.Router();
const Historial_clinico = require('../models/Historial_clinico');

router.post("/", (req, res) => {
    const historia = new Historial_clinico({
        _id: {
            _id: req.body._id,
        },
        Citas: {
            _id: req.body._id,
            Paciente: {
                _id: req.body._id,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                tipoDocumento: req.body.tipoDocumento,
                numeroDocumento: req.body.numeroDocumento,
                fechaNacimiento: req.body.fechaNacimiento,
                tipoUsuario: req.body.tipoUsuario,
                grupoSanguineo: req.body.grupoSanguineo
            },
            Agendas: {
                _id: req.body._id,
                estado: req.body.estado,
                Medico: {
                    _id: req.body._id,
                    nombres: req.body.nombres,
                    apellidos: req.body.apellidos,
                    tipoDocumento: req.body.tipoDocumento,
                    numeroDocumento: req.body.numeroDocumento,
                    Especialidades: {
                        _id: req.body._id,
                        nombre: req.body.nombre,
                        codigo: req.body.codigo
                    }
                }
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
            _id: req.body._id,
            descripcion: req.body.descripcion,
            Especialidades: {
                _id: req.body._id,
                nombre: req.body.nombre,
                codigo: req.body.codigo
            }
        },
        OrdenIncapacidades: {
            _id: req.body._id,
            fechaInicio: req.body.fechaInicio,
            fechaFin: req.body.fechaFin
        },
        OrdenExamenes: {
            _id: req.body._id,
            Examenes: {
                _id: req.body._id,
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
            _id: req.body._id,
            Medicamentos: {
                _id: req.body._id,
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



module.exports = router;
