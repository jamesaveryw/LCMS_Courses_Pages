using Microsoft.EntityFrameworkCore.Migrations;

namespace LCMS.Data.Migrations
{
    public partial class CourseDataTableUpdateForPages : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CourseCrs_Id",
                table: "Pages",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pages_CourseCrs_Id",
                table: "Pages",
                column: "CourseCrs_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Pages_Courses_CourseCrs_Id",
                table: "Pages",
                column: "CourseCrs_Id",
                principalTable: "Courses",
                principalColumn: "Crs_Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pages_Courses_CourseCrs_Id",
                table: "Pages");

            migrationBuilder.DropIndex(
                name: "IX_Pages_CourseCrs_Id",
                table: "Pages");

            migrationBuilder.DropColumn(
                name: "CourseCrs_Id",
                table: "Pages");
        }
    }
}
