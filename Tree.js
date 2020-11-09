class Tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.treeWidth=450;
		this.treeHeight=600;
		this.treeThickness=10;
        
        // To load the tree image
		this.image=loadImage("tree.png");
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true});
		this.lefttreeBody=Bodies.rectangle(0, this.y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:false});
		this.righttreeBody=Bodies.rectangle(this.x+this.treeWidth/2, this.y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:false});
        
        
        // To add the bodies to the world
		World.add(world, this.bottomBody);
		World.add(world, this.lefttreeBody);
		World.add(world, this.righttreeBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.treeHeight/2,this.treeWidth, this.treeHeight)
			pop()
			
	}

}