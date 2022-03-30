const host = 'http://localhost:3003/api/v1'

async function getPalindromeNumbers() {
    const firstNumber = document.querySelector('#inputFirstNumber').value || 0
    const lastNumber = document.querySelector('#inputLastNumber').value || 0

    const asyncGetPalindromes = () => {
        try {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: `${host}/palindrome?first=${firstNumber}&last=${lastNumber}`,
                    type: 'get',
                    dataType: 'json',
                    contentType: "application/json",
                })
                    .done(data => {
                        resolve(data)
                    })
                    .fail(err => {
                        reject(err)
                    })
            })
        } catch (error) { return error} 
    }

    const palindromes = await asyncGetPalindromes()
    console.log(palindromes)

    return palindromes
}

async function showPalindromeNumbers() {
    const palindromes = await getPalindromeNumbers()
    const toString = palindromes.length == 0 ? 'Não há números palíndromos dentro do intervalo informado' : palindromes.join(', ')
    const paragraph = document.querySelector('#show-palindromes')
    
    paragraph.innerHTML = toString
}

document.querySelector('#button-generate').addEventListener('click', showPalindromeNumbers)