function generateUsernames(emailArr) {
    let results = [];
    for (let email of emailArr) {
        let [alias, domain] = email.split("@");
        let username = alias + ".";
        let domainParts = domain.split(".");
        domainParts
            .forEach(d => username += d[0]);
        results.push(username);
    }
    console.log(results.join(", "));
}

generateUsernames(["peshoo@gmail.com", "todor_43@mail.dir.bg", "foo@bar.com"]);