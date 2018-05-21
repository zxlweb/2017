# 标题h1
> 引用
` 用此符号标记代码块将变成一行
``` 用此符号生成代码块
![](./01.png '描述')   插入图片

序列 .后保持空格  1. 第一 2. 第二

# Schemas (模式) 
>一种以文件格式存储的数据u模型顾家，不具备数据库操作能力
# Model
> 有Schema编译而成的假象构造器，具备抽象属性和行为。Model的么一个实例（instance）就是一个document。document 可以保存到数据库和从数据库中返回



# Instance:有Model创建的实例
![](./mongoose-Model.jepg)


# 定义Schema
mongoose中任何事物都是从Schema开始的。每一个Schema对应mongoDB中的一个集合（collection=》等价SQL中的table）
schema中定义了集合中文档的样式（document）

为schema添加静态方法，静态方法在Model层就能使用
mongoooseSchema.statics.findebyusername=function(username,cb){
    return this.model('modalName').find({username:username},cb)
}
为schema添加实例方法，只能在实例中使用：
mongooseSchema.methods.findbyusername = function(username, callback) {
    return this.model('modelName').find({username: username}, callback);
}

# 创建一个Model
为了使用scheme定义，我们需要使用scheme转换为Model
mongoose.model(modelName,schemaName)


var animalSchema=mongoose.Schema({
    name:string,
    type:string
})
animalSchema.methods.findSimilarTypes=function(cb){
    return this.modal('AnimalModal').find({type:this.type},cb)
}
var AnimalModal=mongoose.modal('AnimalModal',animalSchema);//创建一个Animal的modal
var dog=new AnimalModal({})

Schema->Modal->Instance

MongoDB：
创建集合collection：（类似SQL数据库的table）
1.db.zxl.insert({"name":"菜鸟教程"})；
2.db.createCollecton('zxl')

查看已经有的集合可以用
show collections

删除集合
db.collectionName.drop()


创建文档document：（类SQL数据库的row）
db.collectionName.insert(document)
db.collectionName.save(document):通过传入的文档那个来替代原来的文档

查询文档：
db.collectionName.find()

更新文档：
db.collectionName.upate(query,update,upsert,multi)
query:查询条件
update:更新内容
upsert:如果不存在该条数据是否插入，默认是false，如果为true则插入
multi:默认只是更新第一条，如果为true则替换所有选择到的文档

移除集合中的数据
db.collectionName.remove(query,{justOne:true|1},writeConcern:<document>)

#MongoDB查询数据库
db.zxl.find({},projection)
用投影的方式返回查询结果中的关键键


#where语句
db.zxl.find({by:'菜鸟教程'})
db.zxl.find({"by":"菜鸟教程"}).prety()

#and语句
db.zxl.find({"by":"菜鸟教程","name":"MongoDB教程"})

#or语句
db.zxl.find({
    $or:[{key1:value1},{key2:value2}]
})

db.zxl.find({},{"title":1,_id:0}).limit(1).skip(1)
limit()限制返回的数据数量
skip()跳过的数据数量

#mongoDB的条件操作符
(>)  =>$gt
(>=)  =>$gte
(<)  =>$lt
(<=) =>$lte
