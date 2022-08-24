
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { domain } from '../env'
import SingleProduct from './SingleProduct'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [products, setProducts] = useState(null)
    const[categories,setCategories]=useState(null)
    useEffect(()=>{
        const getData=async()=>{
         await axios({
                method:"get",
                url:`${domain}/api/product/`      
        }).then(response=>{
            console.log(response.data);
            setProducts(response.data)
        })
    }
    getData()

    },[])
    useEffect(()=>{
      const getcategories= async()=>{
        await axios({
          method:"get",
          url:`${domain}/api/category`
        }).then(response=>{
          console.log(response.data);
          setCategories(response.data)
        })

      }
      getcategories()

},[])
    const nextproducts=async()=>{
      await axios({
        method:"get",
        url:products?.next
      }).then(response=>{
        console.log(response.data);
        setProducts(response.data)
      })
    }
    const previousproducts=async()=>{
      await axios({
        method:"get",
        url:products?.previous
      }).then(response=>{
        console.log(response.data);
        setProducts(response.data)
      })

    }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            {
              products !== null &&
              products?.results.map((item,i)=>(
                <div key={i} className="col-md-4 my-2">
                  <SingleProduct item={item}/>
                </div>
              ))
            }
      <div className="homepage__pagination">
        <div>
          {
            products?.previous !==null ? (
              <button onClick={previousproducts} className="btn btn-danger">Previous</button>

            ):(
              <button className="btn btn-danger" disabled>Previous</button>
            )
          
          }
          
          
          
        </div>
        <div>
          {
            products?.next !==null ? (
              <button onClick={nextproducts} className="btn btn-success" >Next</button>

            ):(
              <button className="btn btn-success" disabled>Next</button>
            )

          }
        

        </div>
      </div>

        </div>
        </div>
        
        <div className="col-md-3">
          
          <h1>All Category</h1>
          {
          
          //    categories.map !== null &&
          //    categories?.((Category, i)=> (
          //      <div className="my-2" key={i}>
          //        <Link to={`/Category/${Category?.id}`}className="btn btn-success">{Category?.title}</Link>
          //      </div>
          // ))
                          

          }

           

            
        </div>
      </div>
      
    </div>
  )
}

export default HomePage