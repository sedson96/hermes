let test = async (request,response) => {
    let db = request.app.get("db")

    let answer = await db.invoice.insert({building_id: 11, price: 4323}).catch(error => console.log(error))

    console.log(answer)
    response.json(answer)

}
 
let test2 = async (request, response) => {
    response.redirect("edson-silva.com")
}

module.exports = {
    test,
    test2
}