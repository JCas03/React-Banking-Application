const useAuthUser = () => {

useEffect(() => {
    const getUserData = async () => {
      const email = JSON.parse(localStorage.getItem("userEmail"));
      const userRes = await UserService.getUserByEmail(email);
      console.log(userRes.data);
    }
  })

}

export default useAuthUser;