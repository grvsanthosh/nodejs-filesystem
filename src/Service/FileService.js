import * as fs from 'node:fs';

const writeFile = (req,res) => {
    try{
        
        const date = new Date();
        let dateval = `${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`;
        let timeval =`${date.getHours()}H_${date.getMinutes()}M_${date.getSeconds()}S`;
        let fileName = `${dateval}-${timeval}`;
        let filePath = `./output/${fileName}.txt`;
        //writing file
        fs.writeFile(filePath,`Date:${dateval} Time:${timeval}`,'utf-8',(err)=>{
            if(err) throw err            
        })
        res.status(201).send({
            message: "File write successful"
        })
    }

    catch(err) {
       
        console.error(err);
    }
    
}

const readFile = (req,res) => {
    try{
        let fileData = [];
        //reading file
         fs.readdir('./output',(err,data)=>{
            if(err){
                
                console.error(err);
            }
            else if(data){
                fileData=data.map((e)=>{
                   return e;
                    
                })
                res.status(200).send({
                    message:"File read successful",
                    data: fileData
                })                
            }
                      
        })
        
        
            
        
        
       
    }
    catch(err) {
      
        console.error(err)
    }

}

export default {writeFile, readFile}