/**
 * MySpecialTriangle
 * @constructor
 */
class MySpecialTriangle extends CGFobject
{
	constructor(scene, minS, maxS, minT, maxT)
	{
		super(scene);

		this.minS = minS || 0;
		this.maxS = maxS || 1;
		this.minT = minT || 0;
		this.maxT = maxT || 1;

		this.initBuffers();
	};

	initBuffers()
	{
		this.vertices = [
		-0.5, 0, 0,
		0.5, 0, 0,
		0, 0, 1
		];

		this.indices = [
		2, 1, 0
		];

		this.normals = [
			0,1,0,
			0,1,0,
			0,1,0,
			0,1,0
		]

		this.texCoords = [
			this.minS, this.maxT,
			this.maxS, this.maxT,
			this.minS, this.minT,
			this.maxS, this.minT
		];



		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	};
};
