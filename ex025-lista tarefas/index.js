

function Armazenar(){

    
    var btnTarefa = document.getElementById('tarefa').value

    if(btnTarefa===''){
        window.alert('Não adicione tarefas vazias ')
        return
    }
    else{
        var listaMae = document.getElementById('listaMae')
        var li = document.createElement('li')

        var botao = document.createElement('button')
        li.innerText= btnTarefa+ '      '
        botao.innerText = 'Apagar'

        

        listaMae.appendChild(li)
        li.appendChild(botao)

        

        botao.addEventListener('click', function(e){
            listaMae.removeChild(li)

         })


       function pegar(){
        localStorage('tarefa',btnTarefa)
       }

    document.getElementById('tarefa').value=''
    }

    
}



