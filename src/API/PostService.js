export default class PostService {
   static async getAll(){
         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
         const data = await response.json()
         console.log(data)
         return data //for all 
         //return response
   }
}