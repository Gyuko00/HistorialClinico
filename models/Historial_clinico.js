const mongoose = require('mongoose');
const EsquemaHistoria = mongoose.Schema(
    {
        _id: {
            type: String,
            required: true,
            unique: true
        },
        Citas: {
            _id: {
                type: String,
                required: true,
                unique: true
            },
            Paciente: {
                _id: {
                    type: String,
                    required: true,
                    unique: true
                },
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
            Agendas: {
                _id: {
                    type: String,
                    required: true,
                    unique: true
                },
                estado: {
                    type: String,
                    require: true
                },
                Medico: {
                    _id: {
                        type: String,
                        required: true,
                        unique: true
                    },
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
                            unique: true,
                            required: true
                        }
                    }
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
            _id: {
                type: String,
                required: true,
                unique: true
            },
            descripcion: {
                type: String,
                required: true
            },
            Especialidades: {
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
                }
            }
        },
        OrdenIncapacidades: {
            _id: {
                type: String,
                required: true,
                unique: true
            },
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
            _id: {
                type: String,
                required: true,
                unique: true
            },
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
                    required:true
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
            _id: {
                type: String,
                required: true,
                unique: true
            },
            Medicamentos: {
                _id: {
                    type: String,
                    required: true,
                    unique: true
                },
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
        collection: "Historial_clinico",
        versionKey: false
    }
);
module.exports = mongoose.model("Historial_clinico", EsquemaHistoria);