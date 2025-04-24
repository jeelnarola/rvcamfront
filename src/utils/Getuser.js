const Getuser = () =>{
  const user = (localStorage.getItem('adminToken'));
  return user
}
export default Getuser