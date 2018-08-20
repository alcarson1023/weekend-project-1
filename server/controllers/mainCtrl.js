const axios = require ('axios')

let data = ''
let history = []


const getIpsum = (req, res, next) => {
    axios.get('https://loripsum.net/api/1/short/plaintext')
    .then(response => {
        rawData = response.data
        modData = rawData.split(/[?.!;]/)
        finalData = modData.splice(1,1)

        // history.unshift(finalData)
        data = finalData

        res.status(200).json({data: data, history: history})
    })
    .catch(err => console.log(err))
        
}

const addHistory = (req,res,next) => {
    history.unshift(data)
    console.log(data)
}

const addIpsum = (req, res, next) => {
    data.push(req.body)
    res.status(200).send({data, history})
}

const deleteIpsum =(req, res, next) => {
    history.splice(req.params.id,1)
    res.status(200).json({history})
}

const putIpsum = (req,res,next) => {
    history[req.params.id] = req.params.string
    res.status(200).json({history})
}



module.exports = {
    getIpsum,  // getPeople
    addIpsum,  //addPeople
    deleteIpsum,
    addHistory,
    putIpsum
  };  //addPerson - addIpsum
  //newName = typedIn