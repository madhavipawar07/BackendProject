//Using Promises
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}
    


export {asyncHandler}//asyncHandler is a higher order function which can accept function as a parameters and can return too

// //Using try-catch blcok
// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//        await fn(req, res, next) 
//     } catch (error) {
//      res.status(err.code || 500).json({
//         success: false,
//         message: err.message
//      })
//     }
// }