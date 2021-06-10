class Net {
    constructor() { }

    sendData(data_req) {
        data_req = JSON.stringify(data_req)

        $.ajax({
            url: '/',
            data: { data_req },
            type: 'POST',
            success: function (data) {
                console.log(data)
            }
        })
    }
}