<template>
    <section class="coach">
        <div class="heading">
            <h3>OUR TEAM</h3>
            <H1>MEET OUR COACHES</H1>
            <P>Our expert coaches are here to guide, push, and support you on your fitness journey.</P>
        </div>
        <div class="container">
            <div class="coaches">
                <div class="images">
                    <img src="@/assets/image/coaches/coachjet.png" alt="">
                </div>
                <div class="text">
                    <h1>COACH JET</h1>
                    <p>The first Coach of MetalCore Fitness of Jaro Branch</p>
                </div>
            </div>
            <div class="coaches">
                <div class="images">
                    <img src="@/assets/image/coaches/coachjan.png" alt="">
                </div>
                <div class="text">
                    <h1>COACH JAN</h1>
                    <p>The Progress-Driven Coach of Jaro Branch</p>
                </div>
            </div>
            <div class="coaches">
                <div class="images">
                    <img src="@/assets/image/coaches/coachjun.png" alt="">
                </div>
                <div class="text">
                    <h1>COACH JUN</h1>
                    <p>The Seasoned Coach of Jaro Branch</p>
                </div>
            </div>
            <div class="coaches">
                <div class="images">
                    <img src="@/assets/image/coaches/coachniel.png" alt="">
                </div>
                <div class="text">
                    <h1>COACH NIEL</h1>
                    <p>The Motivating Coach of San Miguel Branch</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>



.coach{
  max-width: 100vw;
  min-height: 100vh;
  background-color: #1A1A1A; 
}

.heading{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 120px 25px 40px; 

    h3{
        color: red;
    }
    h1{
        color: white;
    }
    p{
        color: white;
    }
}

.container{
    min-height: 50vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;

    .coaches{
        display: flex;
        background-color: #080808; 
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 12px; 
        border-radius: 12px; 
        border: 1px solid #383838; 
        box-sizing: border-box;  
        overflow: hidden;
        gap: 10px;
        text-align: center;
    }

    img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    }

    h1{
        color: white;
    }
    p{
        color: rgb(196, 195, 194);
    }

}

</style>