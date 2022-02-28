const buddis = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
buddis();

const displayBuddies = data => {
    const buddisResult = data.results;
    console.log(buddisResult)
    const buddiesDiv = document.getElementById('buddis');
    for(const buddy of buddisResult){
        const p = document.createElement('p');
        p.innerText = `Gender: ${buddy.gender} Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email} Location: ${buddy.location.city} Country: ${buddy.location.country} State: ${buddy.location.state} picture: ${buddy.picture.medium}`;
        buddiesDiv.appendChild(p);
    }
}