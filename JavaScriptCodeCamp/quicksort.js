function partition(vetor,start,end)
{
    const pivot = vetor[end];
    let i = start - 1;

    for(let j = start; j <= end -1 ;j++)
    {
        if(vetor[j] < pivot)
        {
            i++;
            [vetor[j],vetor[i]] = [vetor[i],vetor[j]];
        }
    }

    [vetor[i+1],vetor[end]] = [vetor[end],vetor[i+1]];

    return i+1;

}

function quicksort(vetor, start,end)
{
    if(start < end)
    {
        let q = partition(vetor,start,end);
        quicksort(vetor,start,q-1);
        quicksort(vetor,q+1,end);
    }
}

function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
}

array = randomArray(25,100000);

for(let j = 0; j < array.length;j++)
{
    console.log(array[j]);
}

quicksort(array,0,array.length -1);

console.log("\n","array after calling quicksort", "\n");


for(let j = 0; j < array.length;j++)
{
    console.log(array[j]);
}