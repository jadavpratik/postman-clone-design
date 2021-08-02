function checkApi(){
    const url = $('[name="url"]').val();
    const method = $('[name="method"]').val();
    $.ajax({
        url : url,
        method : method,
        data : JSON.stringify(dataObj),
        success : function(res){
            console.log(res);
            $('[name="output"]').html(res);
        },
        error : function(xhr, status, error){
            $('[name="output"]').html(res);
        }
    })
}


// DELETE INPUT
function selfDelete(element){
    element.parentElement.outerHTML = null;
}

// ADD INPUT
function addInput(){

    const input_type = $('[name="input_type"]').val();
    const key = $('[name="key"]').val();

    const input_text = `<div class="d-flex align-items-center mb-3">                
                    <input class="form-control" type="text" placeholder="${key}" name="${key}">
                    <button onclick='selfDelete(this)' class='btn btn-outline-danger border-0'>
                        <i class="fas fa-times"></i>
                    </button>
                </div>`;

    const input_password = `<div class="d-flex align-items-center mb-3">                
                    <input class="form-control" type="password" placeholder="${key}" name="${key}">
                    <button onclick='selfDelete(this)' class='btn btn-outline-danger border-0'>
                        <i class="fas fa-times"></i>
                    </button>
                </div>`;
                
    const input_file = `<div class="d-flex align-items-center mb-3">                
                        <div class="custom-file">
                            <input class="custom-file-input" type="file" placeholder="${key}" name='${key}'>                    
                            <label for="" class="custom-file-label">IMAGES</label>
                        </div>
                        <button onclick='selfDelete(this)' class='btn btn-outline-danger border-0'>
                            <i class="fas fa-times"></i>
                        </button>
                    </div>`         

    const input_textarea = `<div class="d-flex align-items-start mb-3">                
                    <textarea class="form-control" style="height:100px" placeholder="${key}" name='${key}'></textarea>
                    <button onclick='selfDelete(this)' class='btn btn-outline-danger border-0'>
                        <i class="fas fa-times"></i>
                    </button>
                </div>`;                


    var temp;
    $('[name="key"]').val('');

    switch(input_type){
        case 'text':
            temp = input_text;
            break;
        case 'password':
            temp = input_password;
            break;
        case 'file':
            temp = input_file;
            break;
        case 'textarea':
            temp = input_textarea;
            break;
        default:
            temp = input_text;
    }

    document.getElementsByClassName('input_lists')[0].innerHTML += temp;
}