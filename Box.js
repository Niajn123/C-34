class Box{
  constructor(x,y,width,height){
    var options={
      'restitution': 0.8,
      'friction': 0.1,
      'density': 0.4,
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body)
  }
  display(){
    var pause=this.body.position
    var angles=this.body.angles
    push()
    translate(pause.x, pause.y)
    rotate(angles)
    rectMode(CENTER)
    strokeWeight(4)
    stroke("Green")
    fill(255)
    rect(0,0,this.width,this.height)
    pop()
  }
}
  


