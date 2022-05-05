function n_parite(n,parite)
{
    let i=0; 
    let count=0;
    let sum=0

    while(count < n)
    {
        if (parite)
        {
            if(i%2<=0)
            {
                sum +=i
                count++
            }
        }
        else
        {
            if(i%2>0)
            {
                sum +=i
                count++
            }
        }

        i++
    }
    return sum
}

console.log(n_parite(5,false))