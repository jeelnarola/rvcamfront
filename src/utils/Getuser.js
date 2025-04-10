const Getuser = () =>{
  const user  = JSON.parse(localStorage.getItem('login'));
  console.log(user); // Jeel
  return user
}
export default Getuser