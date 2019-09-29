import Service from './service'
import { axios } from '@/plugins/axios'


export default class ExerciseService extends Service {
   getExerciseText(){
      
      let info
      axios.get('https://baconipsum.com/api/?type=meat-and-filler')
          .then(function (response){
            console.log(JSON.stringify(response.data[0]))
         })
      return info
   }
}