using Microsoft.EntityFrameworkCore.Migrations;

namespace LCMS.Data.Migrations
{
    public partial class CoursePageDataTableUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CoursesPages_Courses_CourseCrs_Id",
                table: "CoursesPages");

            migrationBuilder.DropForeignKey(
                name: "FK_CoursesPages_Pages_PagePg_Id",
                table: "CoursesPages");

            migrationBuilder.DropIndex(
                name: "IX_CoursesPages_CourseCrs_Id",
                table: "CoursesPages");

            migrationBuilder.DropIndex(
                name: "IX_CoursesPages_PagePg_Id",
                table: "CoursesPages");

            migrationBuilder.DropColumn(
                name: "CourseCrs_Id",
                table: "CoursesPages");

            migrationBuilder.DropColumn(
                name: "PagePg_Id",
                table: "CoursesPages");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesPages_Pg_Id",
                table: "CoursesPages",
                column: "Pg_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CoursesPages_Courses_Crs_Id",
                table: "CoursesPages",
                column: "Crs_Id",
                principalTable: "Courses",
                principalColumn: "Crs_Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CoursesPages_Pages_Pg_Id",
                table: "CoursesPages",
                column: "Pg_Id",
                principalTable: "Pages",
                principalColumn: "Pg_Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CoursesPages_Courses_Crs_Id",
                table: "CoursesPages");

            migrationBuilder.DropForeignKey(
                name: "FK_CoursesPages_Pages_Pg_Id",
                table: "CoursesPages");

            migrationBuilder.DropIndex(
                name: "IX_CoursesPages_Pg_Id",
                table: "CoursesPages");

            migrationBuilder.AddColumn<int>(
                name: "CourseCrs_Id",
                table: "CoursesPages",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "PagePg_Id",
                table: "CoursesPages",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CoursesPages_CourseCrs_Id",
                table: "CoursesPages",
                column: "CourseCrs_Id");

            migrationBuilder.CreateIndex(
                name: "IX_CoursesPages_PagePg_Id",
                table: "CoursesPages",
                column: "PagePg_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CoursesPages_Courses_CourseCrs_Id",
                table: "CoursesPages",
                column: "CourseCrs_Id",
                principalTable: "Courses",
                principalColumn: "Crs_Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CoursesPages_Pages_PagePg_Id",
                table: "CoursesPages",
                column: "PagePg_Id",
                principalTable: "Pages",
                principalColumn: "Pg_Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
