<template>
      <div class="container bootdey">
        <div class="row">
          <div class="col-12 text-center">
              <div class="section-title mb-4 pb-2 mt-4">
                    <h4 class="title mb-4 text-white">Dream Team</h4>
                    <p class="text-muted para-desc mx-auto mb-0">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-lg-2 col-md-6 col-12 mt-4 pt-2"  v-for="(team, index) in teams" :key="index">
            <div class="team text-center rounded p-3 py-4">
              <div>
                <img :src="team.img" class="img-fluid avatar avatar-medium shadow rounded-pill facce" alt="">
                  <div class="content mt-3">
                    <h4 class="title mb-0">{{team.name}}</h4>
                    <h4 class="title mb-0">{{team.surname}}</h4>
                    <small class="text-muted">{{team.work}}</small>
                      <ul class="list-unstyled mt-3 social-icon social mb-0">
                        <li class="list-inline-item me-2"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-facebook" title="Facebook"></i></a></li>
                        <li class="list-inline-item me-2"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-instagram" title="Instagram"></i></a></li>
                        <li class="list-inline-item me-2"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                        <li class="list-inline-item me-2"><a href="javascript:void(0)" class="rounded"><i class="mdi mdi-github" title="Linkedin"></i></a></li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
    
        
    </template>
    
    <script>
        export default {
            
            name:'CardTeamComponent',
    
            components:{

            },
    
            
            data: function() {
                return{
                    teams: [
                    {
                        id: 1,
                        img: 'img/Alessio.png',
                        name: 'Alessio',
                        surname:'Bonadonna',
                        work: 'Junior Developer',
                    },
                    {   
                        id: 2,
                        img: 'img/Angelo.png',
                        name: 'Angelo',
                        surname:'Calabrò',
                        work: 'Junior Developer',
                    },
                    {
                        img: 'img/SimoneCarrabba.png',
                        name: 'Simone',
                        surname:'Carrabba',
                        work: 'Junior Developer',
                    },
                    {
                        img: 'img/Lorenzo.png',
                        name: 'Lorenzo',
                        surname:'Castiglion',
                        work: 'Junior Developer',
                    },
                    {
                        img: 'img/SimoneConti.png',
                        name: 'Simone',
                        surname:'Conti',
                        work: 'Junior Developer',
                    }
                ]
                }
            },
    
    
            method:{
    
            }
        }
    </script>
    
    <style lang="scss" scoped>
    @use './../assets/styles/partials/variables' as *;
    .box{
        height: 700px;
        
    }
    
    body{margin-top:20px;}
    
    .team-list img {
      width: 50%;
    }
    
    .team-list .content {
      width: 50%;
    }
    
    .team-list .content .follow {
      position: absolute;
      bottom: 24px;
    }
    
    .team-list:hover {
      -webkit-transform: scale(1.05);
              transform: scale(1.05);
    }
    
    .team, .team-list {
      -webkit-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
    }
    
    .team .content .title, .team-list .content .title {
      font-size: 18px;
      color: $red;
    }
    
    
    .team .overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }
    
    .team .member-position, .team .team-social {
      position: absolute;
      bottom: -35px;
      right: 0;
      left: 0;
      margin: auto 10%;
      z-index: 99;
    }
    
    .team .team-social {
      bottom: 40px;
      opacity: 0;
      -webkit-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
    }
    
    .facce{
      transition: 0.7s;
    }
    .team:hover {
      -webkit-transform: translateY(-7px);
              transform: translateY(-7px);
      -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
              box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

              .facce{
    background-color: $red;

   }

    
    }

  
    
    .team:hover .overlay {
      opacity: 0.6;
    }
    
    .team:hover .team-social {
      opacity: 1;
    }
    
    @media (max-width: 768px) {
      .team-list img,
      .team-list .content {
        width: 100%;
        float: none !important;
      }
      .team-list img .follow,
      .team-list .content .follow {
        position: relative;
        bottom: 0;
      }
    }
    
    .social-icon.social li a {
        color: #adb5bd;
        border-color: #adb5bd;
    }
    .social-icon li a {
        color: #35404e;
        border: 1px solid #35404e;
        display: inline-block;
        height: 32px;
        text-align: center;
        font-size: 15px;
        width: 32px;
        line-height: 30px;
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
        overflow: hidden;
        position: relative;
    }
    .rounded {
        border-radius: 5px !important;
    }
    
    .para-desc {
        max-width: 600px;
    }
    .text-muted {
        color: #8492a6 !important;
    }
    
    .section-title .title {
        letter-spacing: 0.5px;
        font-size: 30px;
    }

   
    
    
    
    </style>