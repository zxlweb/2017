gi# gulp.task(taskName,[deps],[fn]) #
deps:Array 一个包含任务列表的的数组，这些任务会在你当前任务之前执行
注意：确保任务列表中的任务都是用来正确的异步执行函数：使用一个cb，或者返回一个Promise或者stream
fn：定义该任务所要执行的一些操作，
通常是：
> gulp.src().pipe(somePlugin())
# gulp.watch(glob,[opts],[tasks]),gulp.watch(glob,[opts],[cb]) 监视文件并且在文件放生改动的时候做一些事情 #
tasks：Array 需要在文件变动时执行的一个或者多个通过gulp.task()创建的task任务 
# gulp.src():输出符合所提供匹配模式或者匹配模式数组的vinyl files的stream 它可以被piped到别的插件中 #
# gulp.dest()：重新输出所有数据，被写入的位置是以所给相对路径所计算的目标目录计算而来的 #
> gulp.src('./client/templates/*.jade') <br>
  .pipe(jade())<br>
  .pipe(gulp.dest('./build/templates'))<br>
  .pipe(minify())<br>
  .pipe(gulp.dest('./build/minified_templates')); <br/>
  相对路径：client/templates <br>
  目标目录：somefile.jade <br>
  目标路径：build/templates/somefile.jade <br>