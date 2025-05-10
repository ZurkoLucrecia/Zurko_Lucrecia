let Profile = {
    fullName: "Pérez Juan Carlos",
    age: 52,
    profession: "Software Developer",
    skills: [Javascript, Python, HTML],
    isEmployed: false,
    contact: {
    email: "PerezJuan@gmail.com",
    location: "Posadas"
    }
   };

function introduction(perfil){
    return "Hello! My name is ${perfil.fullName}. I am a ${perfil.profession}. I work with ${perfil.skils}. I live in ${perfil.contact.location}. I am %{perfil.age} years old."
}
   