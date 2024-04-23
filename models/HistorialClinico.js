const mongoose = require('../conexion/conexion');
const Historia = mongoose.Schema(
    {
        Paciente: {
            nombres: {
                type: String,
                required: true
            },
            apellidos: {
                type: String,
                required: true
            },
            tipoDocumento: {
                type: String,
                required: true
            },
            numeroDocumento: {
                type: String,
                unique: true,
                required: true
            },
            fechaNacimiento: {
                type: String,
                required: true
            },
            tipoUsuario: {
                type: String,
                required: true
            },
            grupoSanguineo: {
                type: String,
                required: true
            }
        },
        Medico: {
            nombres: {
                type: String,
                required: true
            },
            apellidos: {
                type: String,
                required: true
            },
            tipoDocumento: {
                type: String,
                required: true
            },
            numeroDocumento: {
                type: String,
                unique: true,
                required: true
            },
            Especialidades: {
                nombre: {
                    type: String,
                    required: true
                },
                codigo: {
                    type: String,
                    unique: true,
                    required: true
                }
            }
        },
        Citas: {
            codigoCitas: {
                type: String,
                required: true,
                unique: true
            },
            Agendas: {
                estado: {
                    type: String,
                    require: true
                }
            }
        },
        codigo: {
            type: String,
            unique: true,
            required: true
        },
        edad: {
            type: String,
            required: true
        },
        peso: {
            type: String,
            required: true
        },
        altura: {
            type: String,
            required: true
        },
        alergias: {
            type: String,
            required: true
        },
        sintomas: {
            type: String,
            required: true
        },
        antecedentes: {
            type: String,
            required: true
        },
        presionArterial: {
            type: String,
            required: true
        },
        temperatura: {
            type: String,
            required: true
        },
        saturacionOxigeno: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        diagnostico: {
            type: String,
            required: true
        },
        OrdenesEspecialistas: {

            descripcion: {
                type: String,
                required: true
            },
            Especialidades: {

                nombre: {
                    type: String,
                    required: true
                },
                codigo: {
                    type: String,
                    required: true,
                    unique: true
                }
            }
        },
        OrdenIncapacidades: {

            fechaInicio: {
                type: String,
                required: true
            },
            fechaFin: {
                type: String,
                required: true
            },
            descripcion: {
                type: String,
                required: true
            }
        },
        OrdenExamenes: {

            Examenes: {
                _id: {
                    type: String,
                    required: true,
                    unique: true
                },
                nombre: {
                    type: String,
                    required: true
                },
                codigo: {
                    type: String,
                    required: true,
                    unique: true
                },
                tipoExamen: {
                    type: String,
                    required: true
                },
                descripcion: {
                    type: String,
                    required: true
                }
            },
            vigencia: {
                type: String,
                required: true
            },
            resultados: {
                type: String,
                required: true
            },
            estado: {
                type: String,
                required: true
            },
            descripcion: {
                type: String,
                required: true
            }
        },
        OrdenMedicamentos: {
            Medicamentos: {
                nombre: {
                    type: String,
                    requiered: true
                },
                componenteActivo: {
                    type: String,
                    required: true
                },
                presentacion: {
                    type: String,
                    required: true
                },
                descripcion: {
                    type: String,
                    reqired: true
                },
                codigo: {
                    type: String,
                    required: true,
                    unique: true
                }
            },
            dosis: {
                type: String,
                required: true
            },
            cantidad: {
                type: String,
                required: true
            },
            vigencia: {
                type: String,
                required: true
            },
            estado: {
                type: String,
                required: true
            }
        }
    },
    {
        collection: 'HistorialClinico',
        versionKey: false
    });
module.exports = mongoose.model('Historialclinico', Historia);
