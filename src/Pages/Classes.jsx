
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
import useClasses from '../Hook/useClasses';
// import { useAuthGlobally } from '../Context/AuthProvider';
// import useAxiosSecure from '../Hook/useAxiosSecure';
import ClassesCard from '../Components/ClassesCard';

const Classes = () => {
   

    const { classes } = useClasses('Approved');
    // const {user} = useAuthGlobally()
    // const navigate = useNavigate()
    // const {axiosSecure} = useAxiosSecure()
    // const seletedClass = async (singleClass) => {

    //     if(user?.email) {
    //         const addToClass = {
    //             class_id: singleClass._id,
    //             class_name : singleClass.class_name,
    //             class_image : singleClass.class_image,
    //             instructor_name : singleClass.instructor_name,
    //             instructor_email : singleClass.instructor_email,
    //             price : singleClass.price,
    //             email: user?.email
    //         }
    

    //         const res = await axiosSecure.post("/select-class", addToClass)
    //         if(res.data.insertedId) {                 
    //             Swal.fire({
    //                 position: 'center',
    //                 icon: 'success',
    //                 title: 'This class is selectd',
    //                 showConfirmButton: false,
    //                 timer: 1000
    //               })
    //         }
    //     } 
    //     else {
    //         Swal.fire({
    //             title: 'Login In First',
    //             text: "Without login you are not select any class",
    //             icon: 'warning',
    //             showCancelButton: true,
    //             confirmButtonColor: '#3085d6',
    //             cancelButtonColor: '#d33',
    //             confirmButtonText: 'login'
    //           }).then((result) => {
    //             if (result.isConfirmed) {
    //                 navigate("/login")
    //             }
    //           })
    //     }

        
    // }

    return (
        <div>
           
            <div className='max-w-[1240px] mx-auto my-20'>

                <div className='grid gap-4 md:grid-cols-3'>
                    {
                        classes.map(classes => <ClassesCard key={classes._id} classes={classes} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;