const response={
    succes:(req, res,message,status)=>{
        let statusCode = status || 200;   //recibimos los datos en variables
        let data= message || '';
        res.status(statusCode).send({ //como respuesta enviamos un objeto con los datos
            error: false,
            status: statusCode,
            body: data,                                
        })
    },
    error:(req, res,message,status)=>{
        let statusCode = status || 500;   //recibimos los datos en variables
        let data= message || 'Interval error';
        res.status(statusCode).send({  //como respuesta enviamos un objeto con los datos
            error: true,
            status: statusCode,
            body: data,                                
        })
    }
}