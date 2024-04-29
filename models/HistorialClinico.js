const mongoose = require('../conexion/conexion');
const Historia = mongoose.Schema(
    {
        Paciente: {
            nombresPaciente: {
                type: String

            },
            apellidosPaciente: {
                type: String

            },
            tipoDocumentoPaciente: {
                type: String

            },
            numeroDocumentoPaciente: {
                type: String,
                unique: true,

            },
            fechaNacimientoPaciente: {
                type: String

            },
            tipoUsuarioPaciente: {
                type: String

            },
            grupoSanguineoPaciente: {
                type: String

            }
        },
        Medico: {
            nombresMedico: {
                type: String

            },
            apellidosMedico: {
                type: String

            },
            tipoDocumentoMedico: {
                type: String

            },
            numeroDocumentoMedico: {
                type: String,
                unique: true,

            },
            Especialidades: {
                nombreEspecialidad: {
                    type: String

                },
                codigoEspecialidad: {
                    type: String,
                    unique: true,

                }
            }
        },
        Citas: {
            codigoCitas: {
                type: String
                ,
                unique: true
            },
            Agendas: {
                estadoAgenda: {
                    type: String,
                    require: true
                }
            }
        },
        codigoHistoria: {
            type: String,
            unique: true,

        },
        edad: {
            type: String

        },
        peso: {
            type: String

        },
        altura: {
            type: String

        },
        alergias: {
            type: String

        },
        sintomas: {
            type: String

        },
        antecedentes: {
            type: String

        },
        presionArterial: {
            type: String

        },
        temperatura: {
            type: String

        },
        saturacionOxigeno: {
            type: String

        },
        descripcion: {
            type: String

        },
        diagnostico: {
            type: String

        },
        OrdenesEspecialistas: {
            descripcionOrdenEspecialista: {
                type: String

            },
            Especialidades: {

                nombreEspecialidadOrden: {
                    type: String

                },
                codigoEspecialidadOrden: {
                    type: String
                    ,
                    unique: true
                }
            }
        },
        OrdenIncapacidades: {

            fechaInicioIncapacidad: {
                type: String

            },
            fechaFinIncapacidad: {
                type: String

            },
            descripcionIncapacidad: {
                type: String

            }
        },
        OrdenExamenes: {
            Examenes: {
                nombreExamen: {
                    type: String

                },
                codigoExamen: {
                    type: String,
                    unique: true
                },
                tipoExamen: {
                    type: String

                },
                descripcionExamen: {
                    type: String

                }
            },
            codigoOrdenExamen: {
                type: String

            },
            vigenciaOrdenExamen: {
                type: String

            },
            resultadosExamen: {
                type: String

            },
            estadoOrdenExamen: {
                type: String

            },
            descripcionOrdenExamen: {
                type: String

            }
        },
        OrdenMedicamentos: {
            Medicamentos: {
                nombreMedicamento: {
                    type: String,
                    requiered: true
                },
                componenteActivoMedicamento: {
                    type: String

                },
                presentacionMedicamento: {
                    type: String

                },
                descripcionMedicamento: {
                    type: String,
                    reqired: true
                },
                codigoMedicamento: {
                    type: String
                    ,
                    unique: true
                }
            },
            dosisMedicamento: {
                type: String

            },
            cantidadMedicamento: {
                type: String

            },
            vigenciaOrdenMedicamento: {
                type: String

            },
            estadoOrdenMedicamento: {
                type: String

            }
        }
    },
    {
        collection: 'HistorialClinico',
        versionKey: false
    });
module.exports = mongoose.model('Historialclinico', Historia);
