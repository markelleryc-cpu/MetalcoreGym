<template>
    <section class="equipment">
        <div class = "container">
            <div class = "title">
                <h2>Gym Equipment</h2>   
                <h1>FIND YOUR <span>EQUIPMENT</span></h1>      
                <p>Explore our full range of 40+ professional training equipment. 
                Filter by muscle group or branch to see exactly what's waiting for your workout.
               </p>
               <div class = "btn">
                <button>JOIN NOW</button>
               </div>
            </div>
            <div class = "grid-container">
                <div class = "equipment-card">
                    <div class="image"><img src = "@/assets/image/equipImg/1.webp"></div>
                    <div class="text">
                        <h1>Assisted Pull-up Machine</h1>
                    </div>
                </div>
                <div class = "equipment-card">
                    <div class="image"><img src = "@/assets/image/equipImg/2.webp"></div>
                    <div class="text">
                        <h1>Chest & Tricep Dip Machine</h1>
                    </div>
                </div>
                <div class = "equipment-card">
                    <div class="image"><img src = "@/assets/image/equipImg/3.webp"></div>
                    <div class="text">
                        <h1>Leverage Shoulder Press</h1>
                    </div>
                </div>


                <div class = "equipment-card">
                    <div class="image"><img src = "@/assets/image/equipImg/4.webp"></div>
                    <div class="text">
                        <h1>Cable Crossover Machine</h1>
                    </div>
                </div>
                <div class = "equipment-card">
                    <div class="image"><img src = "@/assets/image/equipImg/5.webp"></div>
                    <div class="text">
                        <h1>Chest fly Machine</h1>
                    </div>
                </div>
                <div class = "equipment-card">
                    <div class="image"><img src = "@/assets/image/equipImg/6.webp"></div>
                    <div class="text">
                        <h1>Chest-Supported T-Bar Row</h1>
                    </div>
                </div>


                <div class = "equipment-card">
                    <div class="image"><img src = "@/assets/image/equipImg/7.webp"></div>
                    <div class="text">
                        <h1>Bench Press</h1>
                    </div>
                </div>
                <div class = "equipment-card">
                    <div class="image"><img src = "@/assets/image/equipImg/8.webp"></div>
                    <div class="text">
                        <h1>Incline Press & Reverse Pulldowns</h1>
                    </div>
                </div>
                <div class = "equipment-card">
                    <div class="image"><img src = "@/assets/image/equipImg/9.webp"></div>
                    <div class="text">
                        <h1>Lat Pulldown Machine</h1>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>


.equipment{
  min-height: 100vh; 
  width: 100%; 
  background-color: #1A1A1A; 
}

.container{
  min-height: 100%;
  width: 100%;
  display: grid;
  align-items: end; 
  justify-content: center;
  flex-direction: row;
  grid-template-columns: 0.5fr 1fr;
  background-color: #1A1A1A;
  padding: 120px 25px 40px; 
  box-sizing: border-box; 
}

.title{
    width: 100%;
    min-height: 100%;
    margin-top: 150px;
}

.title h2{
    font-size: 15px;
    color: crimson;
}
.title h1{
    font-size: 45px;
    font-weight: bold;
}

.title h1 span{
    color: crimson;
}

.title p {
    color: grey;
}

.btn{
    width: 400px;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top:100px ;
}

.btn button{
    background-color: crimson;
    color: white;
    font-weight: bold;
    border-radius:5px ;
    border: none;
    padding: 13px 30px;
    
    
}



.grid-container{
    width: 100%;
    min-height: 100px;
    align-items: start;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 80px;
    gap: 15px;
}

.equipment-card{
    width: 100%;
    min-height: 80px;
    background-color:white;
    border: none;
    border-radius: 12px;
    overflow: hidden;
    padding: 0;


}


.image {
   width: 100%;
    height: 225px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.image img{
    max-width: 250px;
    max-height: 100%;
    object-fit: contain;

}

.text{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 60px;
    background-color: #383838;
    box-sizing: border-box;
    padding: 10px;
}

.text h1{
    font-size: 18px;
    text-align: center;
}

h1{
    color: white
}

@media (max-width: 768px){
    .container{
        display: grid;
        grid-template-columns: 1fr;
        
    }
    .grid-container{
        margin-top: 20px;
    
    }

    .title{
        margin-top: 0;
    }
   

    .btn{
        width:100px;
        margin-top: 50px;
        align-items: center;
        

    }
     .btn button{
        width:100px;
        height: 100%;
        margin-top: 10px;
        font-size: 10px;
        

        
    }





    .grid-container{
        grid-template-columns:1fr ;
    }
}





</style>