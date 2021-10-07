using Microsoft.EntityFrameworkCore.Migrations;

namespace LCMS.Data.Migrations
{
    public partial class CoursePageOrderColUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Order",
                table: "CoursesPages",
                newName: "CP_Order");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CP_Order",
                table: "CoursesPages",
                newName: "Order");
        }
    }
}
