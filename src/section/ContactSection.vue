<template>
    <section class="contact">
        <div class="contacts">
            <h1>CONTACT US!</h1>
        </div>
        <div class="inputs">
            <div class="input">
                <input type="First Name" placeholder="First Name" />
                <input type="Last Name" placeholder="Last Name" />
            </div>
            <div class="input2">
                <input type="number" placeholder="Mobile Number" />
                <input type="Email" placeholder="Email ID" />
            </div>
        </div>
        <div class="button"><button>SUBMIT</button></div>
    </section>
</template>


<style scoped>

.contact{
    max-width: 100vw;
    min-height: 50vh;
    background-color: #1A1A1A; 
}

.contacts{
    text-align: center;
    color: crimson;
}

.input{
    display: flex;
    gap: 25px;
    
    input{
        height: 40px;
        width: 200px;
    }
}
.input2{
    display: flex;
    gap: 25px;

        input{
        height: 40px;
        width: 200px;
    }
}

.inputs{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
}

.button{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    

    button{
        height: 40px;
        width: 150px;
        color: white;
        background-color: crimson;
        border-radius:5px
    }
}

@media (max-width: 768px){


    .input{
        display: flex;
        flex-direction: column;
    }
    .input2{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .inputs{
        gap: 25px;
    }
}
</style>