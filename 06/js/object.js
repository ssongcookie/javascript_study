var toyRobot = {    productId: "123-12",
                    name: "Robot",
                    price : "25,000",
                    madeIn : "Korea",
                    quantity: 10,
                    snowStock: function(){
                        document.querySelector('#display').innerHTML 
                        = this.name+ " 제품은 " + this.quantity + "개 남아있습니다.";
                    }
                };

                toyRobot.snowStock();
                
                // 클릭 시 alert 표시되도록 변형
                document.getElementById('display').addEventListener('click',()=>{
                    alert(" 제품의 가격은 " +toyRobot.price+ "입니다.");
                });