const express = require('express');
const Historia = require('../models/HistorialClinico');
const RouterHistoria = express.Router();

// Obtener Historia Clínica
RouterHistoria.get("/", (req, res) => {
    Historia.find()
        .then(datos => res.json({Historias: datos}))
        .catch(error => res.json({mensaje: error}));
});

// Llenar Historia Clínica
RouterHistoria.post("/", (req, res) => {
    const historia = new Historia({
        codigo: req.body.codigoHistoria,
        Paciente: {
            nombres: req.body.nombresPaciente,
            apellidos: req.body.apellidosPaciente,
            tipoDocumento: req.body.tipoDocumentoPaciente,
            numeroDocumento: req.body.numeroDocumentoPaciente,
            fechaNacimiento: req.body.fechaNacimientoPaciente,
            tipoUsuario: req.body.tipoUsuarioPaciente,
            grupoSanguineo: req.body.grupoSanguineoPaciente
        },
        Medico: {
            nombres: req.body.nombresMedico,
            apellidos: req.body.apellidosMedico,
            tipoDocumento: req.body.tipoDocumentoMedico,
            Especialidad:{
                especialidad: req.body.nombreEspecialidad,
                codigo: req.body.codigoEspecialidad
            }
        },
        Citas: {
            codigo: req.body.codigoCitas,
            Agenda: {
                estado: req.body.estadoAgenda
            }
        },
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
        OrdenEspecialistas: {
            descripcion: req.body.descripcionOrdenEspecialista,
            Especialidades: {
                especialidad: req.body.nombreEspecialidadOrden,
                codigo: req.body.codigoEspecialidadOrden,
            }
        },
        OrdenIncapacidades: {
            codigo: req.body.codigoOrdenIncapacidad,
            fechaInicio: req.body.fechaInicioIncapacidad,
            fechaFin: req.body.fechaFinIncapacidad,
            descripcion: req.body.descripcionIncapacidad
        },
        OrdenExamen: {
            codigo: req.body.codigoOrdenExamen,
            Examenes: {
                nombre: req.body.nombreExamen,
                codigo: req.body.codigoExamen,
                tipoExamen: req.body.tipoExamen,
                descripcion: req.body.descripcionExamen
            },
            vigencia: req.body.vigenciaOrdenExamen,
            resultados: req.body.resultadosExamen,
            estado: req.body.estadoOrdenExamen,
            descripcion: req.body.descripcionOrdenExamen
        },
        OrdenMedicamentos: {
            codigo: req.body.codigoOrdenMedicamentos,
            Medicamento: {
                nombre: req.body.nombreMedicamento,
                componenteActivo: req.body.componenteActivo,
                presentacionMedicamento: req.body.presentacionMedicamento,
                descripcion: req.body.descripcionMedicamento,
                codigo: req.body.codigoMedicamento
            },
            dosis: req.body.dosisMedicamento,
            cantidad: req.body.cantidadMedicamento,
            vigencia: req.body.vigenciaOrdenMedicamento,
            estado: req.body.estadoOrdenMedicamento
        }


    });

    historia .save()
        .then(datos => res.json(datos))
        .catch(error => res.json({mensaje: error}));
});

// Actualizar 
RouterHistoria.patch("/", (req, res) => {
    const historia = new Historia
})



module.exports = RouterHistoria;
