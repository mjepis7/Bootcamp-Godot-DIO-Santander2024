extends Node

@export var object_templates: Array[PackedScene] # import the scenes

func _input(event: InputEvent) -> void:
	# Check if event is a left click
	if event is InputEventMouseButton:
		if event.button_index == 1:
			if event.pressed:
				spawn_object(event.position)


func spawn_object(position: Vector2) -> void:
	var index: int = randi_range(0, object_templates.size() - 1) # choosing between one of the objects
	var object_template = object_templates[index] # picking up the object
	var object: RigidBody2D = object_template.instantiate() # cloning the object
	# placing the object at the mouse position and adding it to the scene
	object.position = position 
	add_child(object)

