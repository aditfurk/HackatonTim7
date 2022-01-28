const input = document.getElementById("input-btn")
let data = []
let getAll = localStorage;
let arrE = []
for (const e in getAll) {
  arrE.push(e) 
}
// console.log(arrE);
// Inget -6

for (let m = 0; m < arrE.length-6; m++) {
  // console.log(arrE[m]);
  arrE[m]
  data.push(getLocal(arrE[m]))
}

console.log(data);

let tableList = document.getElementById("list-table")
let output = getData(data)
tableList.innerHTML = output

function getData(data) {
  let output = `<tr class="p-5 bg-yellow-500">
  <th class="p-5">No</th>
  <th class="p-5">Nama</th>
  <th class="p-5">Alamat</th>
  <th class="p-5">Umur</th>
  <th class="p-5">Jenis Kelamin</th>
  <th class="p-5">No. Handphone</th>
</tr>\n`
  let count = 0
  for (const person of data) {
    count++
    if (person.status === 'merah') {
      output += `<tr class="bg-red-600"  >
      <td class="p-5">${count}</td>
      <td class="p-5">${person.nama}</td>
      <td class="p-5">${person.alamat}</td>
      <td class="p-5">${person.umur}</td>
      <td class="p-5">${person.jenisKelamin}</td>
      <td class="p-5">${person.noHp}</td>
    </tr>`
    } else {
      output += `<tr class="bg-green-600" >
      <td class="p-5">${count}</td>
      <td class="p-5">${person.nama}</td>
      <td class="p-5">${person.alamat}</td>
      <td class="p-5">${person.umur}</td>
      <td class="p-5">${person.jenisKelamin}</td>
      <td class="p-5">${person.noHp}</td>
      </tr>`
    }
  }
  return output
}



function getDataPlusDelete(data){
  let output = `<tr class="p-5 bg-yellow-500">
    <th class="p-5">No</th>
    <th class="p-5">Nama</th>
    <th class="p-5">Alamat</th>
    <th class="p-5">Umur</th>
    <th class="p-5">Jenis Kelamin</th>
    <th class="p-5">No. Handphone</th>
    <th class="p-5">Update</th>
  </tr>\n`
  let count = 0
  for (const person of data) {
    count++
    if (person.status === 'merah') {
      output += `<tr class="bg-red-600" >
      <td class="p-5">${count}</td>
      <td class="p-5">${person.nama}</td>
      <td class="p-5">${person.alamat}</td>
      <td class="p-5">${person.umur}</td>
      <td class="p-5">${person.jenisKelamin}</td>
      <td class="p-5">${person.noHp}</td>
      <td class="p-5"><button class = "bg-red-700 hover:bg-red-800 text-white  rounded-lg transition-all duration-300 mb-2 px-3 py-2"
      " onclick="deleteRow('${person.nama}')">Hapus</button><br><button class="bg-green-700 hover:bg-green-800 text-white  rounded-lg transition-all duration-300 px-3 py-2"
      " onclick="changeStatus('${person.nama}')">Sudah Sembuh</button></td>
      </tr>`
    } else {
      output += `<tr class="bg-green-600" >
      <td class="p-5">${count}</td>
      <td class="p-5">${person.nama}</td>
      <td class="p-5">${person.alamat}</td>
      <td class="p-5">${person.umur}</td>
      <td class="p-5">${person.jenisKelamin}</td>
      <td class="p-5">${person.noHp}</td>
      <td class="p-5"><button class = "bg-red-700 hover:bg-red-800 text-white  rounded-lg transition-all duration-300 mb-2 px-3 py-2"
      " onclick="deleteRow('${person.nama}')">Hapus</button>
      </td>
      </tr>`
    }
  }
  return output
}

function changeStatus(obj) {
  // let output = getDataPlusDelete(data)
  
  // let tableList = document.getElementById("list-table")
  // tableList.innerHTML = output
  // let ul = document.getElementById(`tr-${str}`)
  // ul.classList.remove('bg-red-600')
  // ul.classList.add('bg-green-600')
  // let ux = document.getElementById(`tr-input-${str}`)
  // ux.classList.remove('bg-red-600')
  // ux.classList.add('bg-green-600')
 
  swal({
    title: "Yakin bang udah sembuh?",
    text: "Kalau di delete, tapi belom sembuh bahaya bang, punteeen",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      let temp = getLocal(obj)
      localStorage.removeItem(temp)
      temp.status = 'hijau'
      setLocal(temp)
      window.location.reload()
      swal("Selamat ya bang udah sembuh hehe", {
        icon: "success",
      });
    } else {
      swal("Welcome back to quarantine hehe");
    }
  });

}

function deleteRow(str){
  

  swal({
    title: "Yakin dihapus gan?",
    text: "Kalau udah dihapus, gabisa balik lagi nih gan, jangan nyesel.",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      localStorage.removeItem(str)
      data = []
      let getAll = localStorage;
      let arrE = []
      for (const e in getAll) {
        arrE.push(e) 
      }
      // console.log(arrE);
      // Inget -6

      for (let m = 0; m < arrE.length-6; m++) {
        // console.log(arrE[m]);
        arrE[m]
        data.push(getLocal(arrE[m]))
      }
      let tableList = document.getElementById("list-table")
      
      let output = getDataPlusDelete(data)
      tableList.innerHTML = output
      swal("Data berhasil dihapus gan!", {
        icon: "success",
      });
    } else {
      swal("Data masih aman gan! santuyyy");
    }
  });

}

// const delete = document.getElementById()

input.addEventListener('click', function(){
  const element = document.getElementById("update");
  const element2 = document.getElementById("input")
  element.classList.add("hidden");
  element2.classList.remove("hidden")
  let tableList = document.getElementById("list-table")
  
  let output = getData(data)
  tableList.innerHTML = output
})


const update = document.getElementById("update-btn")

update.addEventListener('click', function () {
  const element = document.getElementById("update");
  const element2 = document.getElementById("input")
  element.classList.remove("hidden");
  element2.classList.add("hidden")

  let output = getDataPlusDelete(data)
  
  let tableList = document.getElementById("list-table")
  tableList.innerHTML = output
})

const submit = document.getElementById("btn-submit")

submit.addEventListener('click', function(){
  
  let nama = document.getElementById("nama")
  let alamat = document.getElementById("alamat")
  let umur = document.getElementById("umur")
  let jenisKelaminPria = document.getElementById("jenis-kelamin-pria")
  let jenisKelaminWanita = document.getElementById("jenis-kelamin-wanita")
  let noHp = document.getElementById("no-hp")
  if (!nama.value || !alamat.value || !umur.value || (!jenisKelaminPria.checked && !jenisKelaminWanita.checked) || !noHp.value) {
    swal("Data tidak lengkap!", "Silahkan input ulang!", "error");
  } else {
    let tempObj = {
      nama: nama.value,
      alamat: alamat.value,
      umur: umur.value,
      jenisKelamin:"",
      noHp: noHp.value,
      status: 'merah'
    }
    if(document.getElementById("jenis-kelamin-pria").checked) {
      //Male radio button is checked
      tempObj.jenisKelamin = jenisKelaminPria.value
    }else if(document.getElementById('jenis-kelamin-wanita').checked) {
      //Female radio button is checked
      tempObj.jenisKelamin = jenisKelaminWanita.value
    }
    setLocal(tempObj)
    // let get = getLocal(set)
    // console.log(get);
    
    data.push(tempObj)
    nama.value = ""
    alamat.value = ""
    umur.value = ""
    document.getElementById("jenis-kelamin-pria").checked = undefined
    document.getElementById('jenis-kelamin-wanita').checked = undefined
    noHp.value = ""
    // console.log(data);
  
    let tableList = document.getElementById("list-table")
    
    let output = getData(data)
  
    tableList.innerHTML = output
    swal("Data berhasil ditambahkan!", "Semoga lekas sembuh!", "success").then(function() {
      window.location = "#list-table";
    });
  ;
  }

})

const search = document.getElementById("search-btn")

search.addEventListener('click', function (){
  const name = document.getElementById("nama-update")
  if (!name.value) {
    swal("Input belum diisi!", "Silahkan input ulang!", "error");
  } else {
    const foundData = cariData (name.value, data)
    console.log(foundData);
    if (foundData === 'Data tidak ditemukan'){
      swal("Data tidak ditemukan!", "Silahkan input ulang!", "error");
      name.value = ''
    } else {
      let tableList = document.getElementById("list-table")
      
      let output = getDataPlusDelete(foundData)
      tableList.innerHTML = output
      name.value = ''
    }
  }
})


function cariData(nama, data) {
  let result = []
  for (const person of data) {
    let namaData = person.nama.toLowerCase()
    let namaInput = nama.toLowerCase()
    let noHp = person.noHp
    let found = false
    for (let i = 0; i < namaData.length; i++) {
      if (namaData[i] === namaInput[0]) {
        let tempStr = ''
        for (let j = i; j < i + namaInput.length; j++) {
          tempStr += namaData[j]
        }
        if (tempStr === namaInput) {
          result.push(person)
          found = true
          break;
        }
      }
    }
    if (!found) {
      for (let i = 0; i < noHp.length; i++) {
        if (noHp[i] === namaInput[0]) {
          let tempStr = ''
          for (let j = i; j < i + namaInput.length; j++) {
            tempStr += noHp[j]
          }
          if (tempStr === namaInput) {
            result.push(person)
            found = true
            break;
          }
        }
      }
    }
  }
  if (result.length < 1) {
    return 'Data tidak ditemukan'
  }
  return result
}

function setLocal (tempObj) {
  let keyLocal = tempObj.nama
  localStorage.setItem(keyLocal, JSON.stringify(tempObj))
}

function getLocal (keyLocal) {
  let result = {}
  let get = JSON.parse(localStorage.getItem(keyLocal))
  result = get
  return result
}
