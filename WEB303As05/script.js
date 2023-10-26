/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here
    class ContentItem{
        uniqueId;
         name;
        description;
        category;
    
    constructor(uniqueId, name, description, category){
            this.uniqueId = uniqueId;
            this.name = name;
            this.description = description;
            this.category = category;
            }
    
    updateContentItem(uniqueId, name, description, category){
            if(this.uniqueId == uniqueId && name && description && category){
                this.uniqueId = uniqueId;
                this.name = name;
                this.description = description;
                this.category = category;
                }
    
            }
            toString(){
                return $('#content-item-list').append(`<div class="content-item-wrapper">
                <div id="content-item-${this.uniqueId}">
                <h2 class="name">${this.name}</h2>
                <p class="description">${this.description}</p>
                <div class="category">${this.category}</div>
                </div>
                 </div>`);
                    }
            }
            
            let content = [
            {
                "uniqueId": 0,
                "name": "Akshit Mehta",
                "description": "Computer Engineer",
                "category": "CEO"
            },
            {
                "uniqueId": 1,
                "name": "Vatsal patel",
                "description": "Front-end Developer",
                "category": "Senior Employee"
            },
            {
                "uniqueId": 2,
                "name": "Utsav Panchal",
                "description": "UX designer",
                "category": "Manager"
            },
             {
                "uniqueId": 3,
                "name": "Mihir Patel",
                "description": "Project Manager",
                "category": "Employee"
            }
        
            ];
        
            $.each(content, function(key, val){
              $('#content-item-list').append(`<div class="content-item-wrapper">
                <div id="content-item-${this.uniqueId}">
                <h2 class="name">${this.name}</h2>
                <p class="description">${this.description}</p>
                <div class="category">${this.category}</div>
                </div>
            </div>`);
            });


           
            $('.content-item-wrapper').css('margin', 'auto');  
            $('.content-item-wrapper').css('margin-left', '50px');
            $('.content-item-wrapper').css('marging-top', '30px');
            $('.content-item-wrapper').css('border', 'dashed 3px black');
            $('.content-item-wrapper').css('width', '30%');
            $('.content-item-wrapper').css('padding', '20px');
            $('.content-item-wrapper').css('margin-bottom', '20px');
            
        
                    

});



