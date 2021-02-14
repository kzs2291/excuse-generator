function excuses(){
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let optionWho = who[Math.floor((Math.random() * 3) + 0)];
    let optionAction = action[Math.floor((Math.random() * 3) + 0)];
    let optionWhat = what[Math.floor((Math.random() * 2) + 0)];
    let optionWhen = when[Math.floor((Math.random() * 4) + 0)];

    return document.getElementById("excuse").innerHTML = optionWho + " " + optionAction + " " + optionWhat + " " + optionWhen;
}
excuses();