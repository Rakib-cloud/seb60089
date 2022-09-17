import axios from 'axios';

const imageUploader =  (files,setFiles) => { 

    return new Promise (async(resolve,reject)=>{

        const data = new FormData()
        data.append('image',files[0])
    
        const response  = await axios.post('https://api.imgbb.com/1/upload?key=8ed590ff68ddde6cc90c42108dab7385',data)
        if (response.status === 200) {
            // img url response
            var newImg = response.data.data.image.url;
            setFiles([]);
            resolve(newImg);
        } else {
            reject('failed');
        }

    })

}

export default imageUploader